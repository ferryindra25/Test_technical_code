console.log('hellow from ferry');

$.ajaxSetup({
  headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  }
});

const global = {
  isDebug: true
};

let api = ({ data, url, method }) => {
  if (global.isDebug) {
    console.log(`%cBegin AJAX REQUEST ${url}`, 'color: orange; font-size: larger', {
      data: data
    });
  }

  return new Promise((resolve, reject) => {
    $.ajax({
      method: method,
      url: url,
      data: data,
      success: res => {
        if (global.isDebug) {
          console.log(`%cFinish AJAX REQUEST ${url}`, 'color: green; font-size: larger', {
            data: res
          });
        }
        resolve(res);
      },
      error: (xhr, status, error) => {
        reject(error);
      }
    });
  });
};

function getFormData($form) {
  var unindexed_array = $form.serializeArray();
  var indexed_array = {};

  $.map(unindexed_array, function (n, i) {
    indexed_array[n['name']] = n['value'];
  });

  return indexed_array;
}

function dlgSuccess({ title, text }) {
  Swal.fire({
    icon: 'success',
    title: title,
    text: text,
    customClass: {
      confirmButton: 'btn btn-success'
    }
  });
}

function dlgError({ title, text }) {
  Swal.fire({
    icon: 'error',
    title: title,
    text: text,
    customClass: {
      confirmButton: 'btn btn-success'
    }
  });
}

function dlgConfirm({ title, text }) {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: title,
      text: text,
      icon: 'warning'
    }).then(function (result) {
      if (result.isConfirmed) {
        resolve();
      }
    });
  });
}

function clearForm({ selector }) {
  $(selector).trigger('reset');
  $(`${selector} :input`).prop('readonly', false);
  $(`${selector} :checkbox`).prop('checked', false);
  $(`${selector} [type=select2]`).val(null).trigger('change');
}

function dtButtons() {
  console.log('use DT buttons');
  return [
    {
      extend: 'collection',
      className: 'btn btn-label-primary dropdown-toggle mx-3',
      text: '<i class="ti ti-logout rotate-n90 me-2"></i>Export',
      buttons: [
        {
          extend: 'print',
          title: 'Users',
          text: '<i class="ti ti-printer me-2" ></i>Print',
          className: 'dropdown-item',
          exportOptions: {
            columns: [2, 3],
            // prevent avatar to be print
            format: {
              body: function body(inner, coldex, rowdex) {
                if (inner.length <= 0) return inner;
                var el = $.parseHTML(inner);
                var result = '';
                $.each(el, function (index, item) {
                  if (item.classList !== undefined && item.classList.contains('user-name')) {
                    result = result + item.lastChild.textContent;
                  } else result = result + item.innerText;
                });
                return result;
              }
            }
          },
          customize: function customize(win) {
            //customize print view for dark
            $(win.document.body)
              .css('color', config.colors.headingColor)
              .css('border-color', config.colors.borderColor)
              .css('background-color', config.colors.body);
            $(win.document.body)
              .find('table')
              .addClass('compact')
              .css('color', 'inherit')
              .css('border-color', 'inherit')
              .css('background-color', 'inherit');
          }
        },
        {
          extend: 'csv',
          title: 'Users',
          text: '<i class="ti ti-file-text me-2" ></i>Csv',
          className: 'dropdown-item',
          exportOptions: {
            columns: [2, 3],
            // prevent avatar to be print
            format: {
              body: function body(inner, coldex, rowdex) {
                if (inner.length <= 0) return inner;
                var el = $.parseHTML(inner);
                var result = '';
                $.each(el, function (index, item) {
                  if (item.classList.contains('user-name')) {
                    result = result + item.lastChild.textContent;
                  } else result = result + item.innerText;
                });
                return result;
              }
            }
          }
        },
        {
          extend: 'excel',
          title: 'Users',
          text: '<i class="ti ti-file-spreadsheet me-2"></i>Excel',
          className: 'dropdown-item',
          exportOptions: {
            columns: [2, 3],
            // prevent avatar to be display
            format: {
              body: function body(inner, coldex, rowdex) {
                if (inner.length <= 0) return inner;
                var el = $.parseHTML(inner);
                var result = '';
                $.each(el, function (index, item) {
                  if (item.classList.contains('user-name')) {
                    result = result + item.lastChild.textContent;
                  } else result = result + item.innerText;
                });
                return result;
              }
            }
          }
        },
        {
          extend: 'pdf',
          title: 'Users',
          text: '<i class="ti ti-file-text me-2"></i>Pdf',
          className: 'dropdown-item',
          exportOptions: {
            columns: [2, 3],
            // prevent avatar to be display
            format: {
              body: function body(inner, coldex, rowdex) {
                if (inner.length <= 0) return inner;
                var el = $.parseHTML(inner);
                var result = '';
                $.each(el, function (index, item) {
                  if (item.classList.contains('user-name')) {
                    result = result + item.lastChild.textContent;
                  } else result = result + item.innerText;
                });
                return result;
              }
            }
          }
        },
        {
          extend: 'copy',
          title: 'Users',
          text: '<i class="ti ti-copy me-1" ></i>Copy',
          className: 'dropdown-item',
          exportOptions: {
            columns: [2, 3],
            // prevent avatar to be copy
            format: {
              body: function body(inner, coldex, rowdex) {
                if (inner.length <= 0) return inner;
                var el = $.parseHTML(inner);
                var result = '';
                $.each(el, function (index, item) {
                  if (item.classList.contains('user-name')) {
                    result = result + item.lastChild.textContent;
                  } else result = result + item.innerText;
                });
                return result;
              }
            }
          }
        }
      ]
    },
    {
      text: '<i class="ti ti-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add New</span>',
      className: 'btnAddNewModal btn btn-primary',
      attr: {
        id: 'btnAddNew'
      }
    }
  ];
}

class VM {
  constructor() {
    this.data = {};
    this.model = {};
    this.dataSource = {};
  }
  test() {
    console.log('TEST');
  }
  addData(newData) {
    for (const key in newData) {
      this.data[key] = bind($(`#${key}`));
      this.data[key].value = newData[key];
      this.data[key]['original'] = newData[key];
      $(`#${key}`).trigger('change');
    }
  }
  addModel(modelName, newModel, restrict = false) {
    //this.model[modelName] = [];
    if (!this.model[modelName]) this.model[modelName] = [];
    for (const key in newModel) {
      if (restrict) {
        if ($(`#${key}`).length > 0) {
          this.model[modelName][key] = bind($(`#${key}`));
          if (this.model[modelName][key].isThousandSeparator()) {
            this.initCleave($(`#${key}`));
          }
          this.model[modelName][key].value = newModel[key];
          this.model[modelName][key]['data'] = newModel[key];
        }
      } else {
        this.model[modelName][key] = bind($(`#${key}`));
        if (this.model[modelName][key].isThousandSeparator()) {
          this.initCleave($(`#${key}`));
        }
        this.model[modelName][key].value = newModel[key];
        this.model[modelName][key]['data'] = newModel[key];
      }

      // console.log(`set value ${key} :`, this.model[modelName][key].value);
      // console.log($(`#${key}`).val());
    }
  }
  resetModel(modelName, newModel) {
    console.log(`reset model ${modelName}`);
    this.model[modelName] = [];
    if (!this.model[modelName]) this.model[modelName] = [];
    for (const key in newModel) {
      this.model[modelName][key] = bind($(`#${key}`));

      this.model[modelName][key].value = newModel[key];
      this.model[modelName][key]['data'] = newModel[key];
    }
  }
  deleteModel(modelName) {
    console.log(`delete model ${modelName}`);
    this.model[modelName] = [];
  }
  getJsonModel(modelName) {
    var returnedJsonData = {};
    for (const key in this.model[modelName]) {
      const mdl = this.model[modelName][key];
      returnedJsonData[mdl.getName()] = mdl.value;
    }
    return returnedJsonData;
  }
  getModelOriginalValue(modelName) {
    var returnedData = {};
    for (const key in this.model[modelName]) {
      returnedData[key] = this.model[modelName].original;
    }
    return returnedData;
  }
  getJsonData() {
    var returnedJsonData = {};
    for (const key in this.data) {
      returnedJsonData[key] = this.data[key].value;
    }
    return returnedJsonData;
  }
  getOriginalValue() {
    var returnedData = {};
    for (const key in this.data) {
      returnedData[key] = this.data[key].original;
    }
    return returnedData;
  }
  validateModel(modelName) {
    var valid = true;
    for (const key in this.model[modelName]) {
      const mdl = this.model[modelName][key];
      if (mdl.isRequired()) {
        if (mdl.value == null || mdl.value == '') {
          mdl.setError(modelName, key);

          valid = false;
        } else {
          mdl.setSuccess(modelName, key);
        }
      }
    }
    return valid;
  }

  clearValidationModel(modelName) {
    $(`.txt-err-${modelName}`).remove();
  }

  //datasource
  addDatasource({ name, dataSource, ajax }) {
    return new Promise((resolve, reject) => {
      if (this.dataSource.name === undefined) {
        if (ajax) {
          api({
            url: ajax.url,
            method: ajax.method,
            data: ajax.data
          }).then(res => {
            this.dataSource[name] = res;

            global.isDebug &&
              console.log(`%cDATASOURCE CREATED [${name}]`, 'color: blue; font-size: larger', {
                data: res
              });

            resolve();
          });
        } else {
          this.dataSource[name] = dataSource;

          global.isDebug &&
            console.log(`%cDATASOURCE CREATED [${name}]`, 'color: blue; font-size: larger', {
              data: dataSource
            });

          resolve();
        }
      }
    });
  }

  select2Ajax({ url, method, data }) {
    return {
      url: url,
      type: method,
      dataType: 'json',
      data: function (params) {
        //console.log(data);
        return {
          search: params.term,
          data
        };
      },
      processResults: function (response) {
        return {
          results: response
        };
      },
      cache: true
    };
  }

  setSelectedDropdown({ el, text, id }) {
    var newOption = new Option(text, id, false, false);
    el.append(newOption).val(id).trigger('change');
  }

  addAutocompleteElement({ textElement, valueElement, url, id, label, onSelect }) {
    textElement.autocomplete({
      source: function (request, response) {
        // Fetch data
        api({
          method: 'post',
          url: url,
          data: { q: request.term }
        }).then(res => {
          res.forEach((element, index) => {
            res[index]['value'] = element[id];
            res[index]['label'] = element[label];
          });
          response(res);
        });
      },
      select: function (event, ui) {
        // Set selection
        //console.log(ui.item);
        if (onSelect) onSelect(ui.item);
        textElement.val(ui.item.label); // display the selected text
        valueElement.val(ui.item.value); // save selected id to input
        return false;
      },
      focus: function (event, ui) {
        textElement.val(ui.item.label);
        valueElement.val(ui.item.value);
        return false;
      }
    });
    textElement.on('input', function (e) {
      const val = e.target.value;
      if (val == '') valueElement.val(val);
    });
  }

  initCleave(field) {
    var cleave = new Cleave(field, {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand'
    });

    $.valHooks[`#${$(field).attr('id')}`] = {
      get: function (el) {
        return cleave.getRawValue();
      },
      set: function (val) {
        cleave.setRawValue(val);
      }
    };
  }

  getCleaveValue(el) {
    //console.log(el.attr('id'));
    var val = $.valHooks[`#${el.attr('id')}`].get();
    if (val == '') {
      val = 0;
    }
    return parseFloat(val);
  }

  setCleaveValue(el, newVal) {
    //console.log(`set new val ${newVal} id ${el.attr('id')}`);
    $.valHooks[`#${el.attr('id')}`].set(newVal);
  }

  setCleaveClass(className) {
    $(`.${className}`)
      .toArray()
      .forEach(function (field) {
        fvm.initCleave(field);
      });
  }

  openModal(el) {
    el.modal({ backdrop: 'static', keyboard: false });
    el.modal('show');
  }

  adjustColumn(grid) {
    setTimeout(() => {
      grid.columns.adjust();
    }, 300);
  }

  getValueDateRange(fDateRange) {
    return fDateRange.value.replaceAll('-', '').split(' to ');
  }
}

function bind(el) {
  return {
    set value(v) {
      if (this.isThousandSeparator()) {
        //console.log(el);
        fvm.setCleaveValue(el, v);
        return;
      }
      if (this.isNumber()) {
        //console.log(el.attr('id'));
        el.val(parseFloat(v));
        return;
      }
      el.val(v);
    },
    get value() {
      if (this.isThousandSeparator()) {
        //console.log(el.attr('id'));
        return fvm.getCleaveValue(el);
      }
      if (this.isNumber()) {
        //console.log(el.attr('id'));
        return parseFloat(el.val());
      }
      return el.val();
    },
    getName() {
      return el.attr('name');
    },
    disabled: function (v) {
      if (el.length > 0) {
        el.prop('disabled', v);
      }
    },
    hide: function () {
      el.hide();
    },
    show: function () {
      el.show();
    },
    isRequired: function () {
      const isReq = el.attr('notnull');
      if (isReq !== undefined) {
        return true;
      }
      return false;
    },
    isThousandSeparator: function () {
      const isThousandSeparator = el.attr('thousandseparator');
      if (isThousandSeparator !== undefined) {
        return true;
      }
      return false;
    },
    isNumber: function () {
      const isNumber = el.attr('number');
      if (isNumber !== undefined) {
        return true;
      }
      return false;
    },
    setError: function (modelName, key) {
      if (el.attr('type') == 'select2') {
        const parent = el.parent();
        if (!$(`.txt-err-${modelName}-${key}`).length > 0)
          parent.append(`<p class='mb-0 text-danger txt-err-${modelName}-${key}'>This field required</p>`);
      } else {
        if (!$(`.txt-err-${modelName}-${key}`).length > 0)
          el.after(`<p class='mb-0 text-danger txt-err-${modelName}-${key}'>This field required</p>`);
      }
    },
    setSuccess: function (modelName, key) {
      const element = $(`.txt-err-${modelName}-${key}`);
      if (element.length > 0) element.remove();
    }
  };
}

function getCheckBoxByName(name) {
  var result = [];
  $(`input:checkbox[name=${name}]:checked`).each(function () {
    result.push($(this).val());
  });
  return result;
}

const fvm = new VM();

class RBAC {
  constructor() {
    this.permission = [];
  }

  useRbac() {
    return new Promise((resolve, reject) => {
      this.route = window.location.pathname;
      console.log(`%cROUTE [${this.route}]`, 'color: white; font-size: larger; background: red;');
      api({
        method: 'post',
        url: '/rbac/getPermission',
        data: { route: this.route }
      })
        .then(res => {
          console.log(res);
          if (!res.error) {
            this.permission = res.msg;
          }
          resolve();
        })
        .catch(err => {
          console.log(err);
          reject();
        });
    });
  }

  registerPermission(permission, el) {
    const result = this.permission.find(obj => obj.functionname === permission);
    if (result == undefined) {
      el.forEach(element => {
        $(`${element}`).remove();
      });
    }
  }

  can(permission) {
    const result = this.permission.find(obj => obj.functionname === permission);
    if (result == undefined) return false;
    return true;
  }
}
const rbac = new RBAC();
